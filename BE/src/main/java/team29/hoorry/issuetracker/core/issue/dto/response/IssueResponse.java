package team29.hoorry.issuetracker.core.issue.dto.response;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.issue.domain.Issue;
import team29.hoorry.issuetracker.core.issue.domain.IssueLabel;
import team29.hoorry.issuetracker.core.label.dto.LabelResponse;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssueResponse {

	private Long id;
	private String status;
	private String title;
	private List<LabelResponse> labels;
	private List<MemberResponse> assignees;
	private String milestone;
	private MemberResponse writer;
	private LocalDateTime createdAt;

	public IssueResponse(Issue issue) {
		this.id = issue.getId();
		this.status = issue.getStatus().name();
		this.title = issue.getTitle();
		this.labels = issue.getLabels().stream()
			.map(IssueLabel::getLabel)
			.map(LabelResponse::from)
			.collect(Collectors.toList());
		this.assignees = issue.getAssignees()
			.stream()
			.map(ia -> MemberResponse.from(ia.getAssignee()))
			.collect(Collectors.toList());
		this.milestone = issue.getMilestone().getTitle();
		this.writer = MemberResponse.from(issue.getWriter());
		this.createdAt = issue.getCreatedAt();
	}
}
