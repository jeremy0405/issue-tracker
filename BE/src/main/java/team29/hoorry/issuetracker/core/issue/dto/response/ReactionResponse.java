package team29.hoorry.issuetracker.core.issue.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ReactionResponse {

	private String emoji;
	private List<IssueMemberResponse> members;

}
