package team29.hoorry.issuetracker.core.milestone;

import java.util.List;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueMilestoneResponse;

public interface MilestoneCustomRepository {

	List<IssueMilestoneResponse> findAllWithRelatedIssueStatusCount();
}
