package team29.hoorry.issuetracker.core.issue.dto.response;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssueResponse {

	private Long id;
	private String status;
	private String title;
	private List<Label> labels;
	private List<IssueMemberResponse> assignees;
	private String milestone;
	private IssueMemberResponse writer;
	private LocalDateTime createdAt;

}
