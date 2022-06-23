package team29.hoorry.issuetracker.core.issue;

import org.springframework.data.jpa.repository.JpaRepository;
import team29.hoorry.issuetracker.core.issue.domain.Issue;

public interface IssueRepository extends JpaRepository<Issue, Long>, IssueCustomRepository {

}
