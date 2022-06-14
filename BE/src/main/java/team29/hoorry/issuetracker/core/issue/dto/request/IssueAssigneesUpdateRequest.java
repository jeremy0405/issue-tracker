package team29.hoorry.issuetracker.core.issue.dto.request;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueAssigneesUpdateRequest {

	private List<Long> assigneesId;
}
