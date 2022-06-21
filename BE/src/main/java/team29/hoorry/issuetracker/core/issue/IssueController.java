package team29.hoorry.issuetracker.core.issue;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueAssigneesUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueFilter;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueLabelsUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueMilestoneUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueStatusUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueTitleUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssuesSaveRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssuesStatusUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueDetailResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssuesResponse;

@RestController
@RequestMapping("/api/issues")
@RequiredArgsConstructor
public class IssueController {

	private final IssueMockService issueService;

	@Operation(
		summary = "이슈 리스트 조회",
		description = "모든 이슈를 조회합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 리스트 조회 성공",
				content = {
					@Content(
						mediaType = "application/json",
						array = @ArraySchema(schema = @Schema(implementation = IssuesResponse.class))
					)
				})
		}
	)
	@GetMapping
	public ResponseEntity<IssuesResponse> issues(
		@ModelAttribute IssueFilter issueFilter,
		@RequestParam(required = false) String searchParam,
		@RequestParam(required = false) Integer page
	) {
		IssuesResponse issuesResponse = issueService.findAll(searchParam, page);

		return ResponseEntity.ok(issuesResponse);
	}

	@Operation(
		summary = "이슈 디테일 조회",
		description = "이슈 디테일을 조회합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 디테일을 조회 성공",
				content = {
					@Content(
						mediaType = "application/json",
						array = @ArraySchema(schema = @Schema(implementation = IssueDetailResponse.class))
					)
				})
		}
	)
	@GetMapping("/{id}")
	public ResponseEntity<IssueDetailResponse> issueDetail(@PathVariable Long id) {
		IssueDetailResponse issueDetailResponse = issueService.findById(id);

		return ResponseEntity.ok(issueDetailResponse);
	}

	@Operation(
		summary = "이슈 등록",
		description = "이슈를 등록합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 등록 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 등록 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody IssuesSaveRequest issuesSaveRequest) {
		issueService.save(issuesSaveRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "이슈 상태 다건 수정",
		description = "이슈의 상태를 다건 수정합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 상태 다건 수정 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 상태 다건 수정 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PatchMapping("/status")
	public ResponseEntity<Void> updateAllStatus(
		@RequestBody IssuesStatusUpdateRequest issuesStatusUpdateRequest) {
		issueService.updateAllStatus(issuesStatusUpdateRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "이슈 상태 단건 수정",
		description = "이슈의 상태를 단건 수정합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 상태 단건 수정 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 단태 단건 수정 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PatchMapping("/{id}/status")
	public ResponseEntity<Void> updateStatus(
		@PathVariable Long id,
		@RequestBody IssueStatusUpdateRequest issueStatusUpdateRequest) {
		issueService.updateStatus(id, issueStatusUpdateRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "이슈 제목 수정",
		description = "이슈의 제목을 수정합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 제목 수정 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 제목 수정 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PatchMapping("/{id}/title")
	public ResponseEntity<Void> updateTitle(
		@PathVariable Long id,
		@RequestBody IssueTitleUpdateRequest issueTitleUPdateRequest) {
		issueService.updateTitle(id, issueTitleUPdateRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "이슈 라벨 수정",
		description = "이슈의 라벨을 수정합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 라벨 수정 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 라벨 수정 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PatchMapping("/{id}/labels")
	public ResponseEntity<Void> updateLabels(
		@PathVariable Long id,
		@RequestBody IssueLabelsUpdateRequest issueLabelsUpdateRequest) {
		issueService.updateLabels(id, issueLabelsUpdateRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "이슈 마일스톤 수정",
		description = "이슈의 마일스톤을 수정합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 마일스톤 수정 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 마일스톤 수정 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PatchMapping("/{id}/milestone")
	public ResponseEntity<Void> updateMilestone(
		@PathVariable Long id,
		@RequestBody IssueMilestoneUpdateRequest issueMilestoneUpdateRequest) {
		issueService.updateMilestone(id, issueMilestoneUpdateRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "이슈 담당자 수정",
		description = "이슈의 담당자를 수정합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 담당자 수정 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 담당자 수정 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PatchMapping("/{id}/assignees")
	public ResponseEntity<Void> updateAssignees(
		@PathVariable Long id,
		@RequestBody IssueAssigneesUpdateRequest issueAssigneesUpdateRequest) {
		issueService.updateAssignees(id, issueAssigneesUpdateRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "이슈 삭제",
		description = "이슈를 삭제합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "이슈 삭제 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "이슈 삭제 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		issueService.delete(id);
		return ResponseEntity.ok().build();
	}
}
