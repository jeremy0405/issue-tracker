package team29.hoorry.issuetracker.core.issue.dto.response;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponse {

	private MemberResponse writer;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private String content;
	private List<ReactionResponse> reactions;

}
