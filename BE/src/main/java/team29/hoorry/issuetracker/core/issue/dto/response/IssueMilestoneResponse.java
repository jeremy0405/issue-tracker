package team29.hoorry.issuetracker.core.issue.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssueMilestoneResponse {

	private Long id;
	private String title;
	private Long openIssueCount;
	private Long closedIssueCount;

}
