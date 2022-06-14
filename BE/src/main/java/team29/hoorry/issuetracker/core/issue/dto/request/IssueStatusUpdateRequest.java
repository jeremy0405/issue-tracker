package team29.hoorry.issuetracker.core.issue.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class IssueStatusUpdateRequest {

	private Long id;
	private String status;

}
