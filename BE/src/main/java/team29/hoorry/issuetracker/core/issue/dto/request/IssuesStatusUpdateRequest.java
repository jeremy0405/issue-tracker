package team29.hoorry.issuetracker.core.issue.dto.request;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class IssuesStatusUpdateRequest {

	private List<IssueStatusUpdateRequest> issueStatusUpdateRequests;

}
