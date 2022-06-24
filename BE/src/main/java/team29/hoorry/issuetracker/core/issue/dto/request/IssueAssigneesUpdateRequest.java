package team29.hoorry.issuetracker.core.issue.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueAssigneesUpdateRequest {

	@Schema(required = true)
	private List<Long> assigneesId;
}
