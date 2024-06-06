import requests
import os
from github import Github

def convert_issue_to_html(issue_body):
    html_content = f"<html><body><p>{issue_body}</p></body></html>"
    return html_content

def main():
    issue_number = os.getenv('ISSUE_NUMBER')
    repo_name = os.getenv('GITHUB_REPOSITORY')
    github_token = os.getenv('GITHUB_TOKEN')
    
    g = Github(github_token)
    repo = g.get_repo(repo_name)
    issue = repo.get_issue(int(issue_number))
    
    html_content = convert_issue_to_html(issue.body)
    
    # Create a new branch
    branch_name = f'issue-{issue_number}-to-html'
    base_branch = repo.get_branch('master')
    repo.create_git_ref(ref=f'refs/heads/{branch_name}', sha=base_branch.commit.sha)
    
    # Create a new file with the HTML content
    repo.create_file(f'issue-{issue_number}.html', f'Convert issue #{issue_number} to HTML', html_content, branch=branch_name)
    
    # Create a pull request
    pr = repo.create_pull(title=f'Convert issue #{issue_number} to HTML', 
                          body=f'This PR converts issue #{issue_number} to HTML.', 
                          head=branch_name, 
                          base='main')

if __name__ == "__main__":
    main()
