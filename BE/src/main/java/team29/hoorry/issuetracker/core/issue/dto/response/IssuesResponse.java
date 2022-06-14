package team29.hoorry.issuetracker.core.issue.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class IssuesResponse {

	private Integer openIssueCount;
	private Integer closedIssueCount;
	private Integer labelCount;
	private Integer milestoneCount;

	private List<IssueResponse> issues;

	private List<IssueMemberResponse> assignees;
	private List<IssueLabelResponse> labels;
	private List<IssueMilestoneSimpleResponse> milestones;
	private List<IssueMemberResponse> writers;

}
