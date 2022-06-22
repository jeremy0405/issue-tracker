package team29.hoorry.issuetracker.core.issue.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssuesResponse {

	private Integer openIssueCount;
	private Integer closedIssueCount;
	private Integer labelCount;
	private Integer milestoneCount;

	private List<MemberResponse> assignees;
	private List<IssueLabelResponse> labels;
	private List<IssueMilestoneSimpleResponse> milestones;
	private List<MemberResponse> writers;

	private Page<IssueResponse> issues;
}
