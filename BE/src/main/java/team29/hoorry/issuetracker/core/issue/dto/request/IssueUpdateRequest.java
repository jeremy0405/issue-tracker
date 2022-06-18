package team29.hoorry.issuetracker.core.issue.dto.request;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueUpdateRequest {

	private Long id;
	private String status;
	private String title;
	private List<Long> labelsId;
	private Long milestoneId;
	private List<Long> assigneesId;
}
