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
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueAssigneesUpdateRequest;
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

	private final IssueMockService issueMockService;
	private final IssueService issueService;

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
		@RequestParam(required = false) String q,
		@RequestParam(required = false) Integer page
	) {
		IssuesResponse issuesResponse = issueMockService.findAll(q, page);
		IssuesResponse realIssuesResponse = issueService.findAll(q, page);

		return ResponseEntity.ok(realIssuesResponse);
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
		IssueDetailResponse issueDetailResponse = issueMockService.findById(id);

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
		issueMockService.save(issuesSaveRequest);
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
		issueMockService.updateAllStatus(issuesStatusUpdateRequest);
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
		issueMockService.updateStatus(id, issueStatusUpdateRequest);
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
		issueMockService.updateTitle(id, issueTitleUPdateRequest);
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
		issueMockService.updateLabels(id, issueLabelsUpdateRequest);
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
		issueMockService.updateMilestone(id, issueMilestoneUpdateRequest);
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
		issueMockService.updateAssignees(id, issueAssigneesUpdateRequest);
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
		issueMockService.delete(id);
		return ResponseEntity.ok().build();
	}
}
