package team29.hoorry.issuetracker.core.issue.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class IssueMilestoneResponse {

	private Long id;
	private String title;
	private Integer openIssueCount;
	private Integer closedIssueCount;

}
