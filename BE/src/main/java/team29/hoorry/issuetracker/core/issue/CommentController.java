package team29.hoorry.issuetracker.core.issue;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.issue.dto.request.CommentSaveRequest;

@Tag(name = "comments", description = "코멘트 API")
@RestController
@RequiredArgsConstructor
public class CommentController {

	private final CommentService commentService;

	@PostMapping("/api/issues/{id}/comments")
	public ResponseEntity<Void> write(@PathVariable("id") Long issueId, @RequestBody CommentSaveRequest commentSaveRequest) {
		commentService.write(issueId, commentSaveRequest);

		return ResponseEntity.ok().build();
	}

}
