package team29.hoorry.issuetracker.core.issue.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentSaveRequest {

	private Long memberId;
	private String content;

}
