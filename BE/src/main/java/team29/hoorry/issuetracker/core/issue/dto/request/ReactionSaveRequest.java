package team29.hoorry.issuetracker.core.issue.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReactionSaveRequest {

	private Long memberId;
	private String reaction;

}
