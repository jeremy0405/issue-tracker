package team29.hoorry.issuetracker.core.issue.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssueDetailResponse {

	private Long id;
	private String title;
	private List<Label> labels;
	private List<IssueMemberResponse> assignees;
	private IssueMemberResponse writer;
	private IssueMilestoneResponse milestone;
	private List<CommentResponse> comments;

}
