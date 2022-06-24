package team29.hoorry.issuetracker.core.issue;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import team29.hoorry.issuetracker.core.issue.domain.Issue;
import team29.hoorry.issuetracker.core.issue.domain.Status;
import team29.hoorry.issuetracker.core.issue.dto.IssueFilter;

public interface IssueCustomRepository {
	Page<Issue> findAllByIssueFilter(IssueFilter issueFilter, Pageable pageable);
	Long countFilteredIssues(IssueFilter issueFilter, Status status);
}
