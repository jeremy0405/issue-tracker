package team29.hoorry.issuetracker.core.milestone;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.milestone.dto.MilestoneAddRequest;
import team29.hoorry.issuetracker.core.milestone.dto.MilestoneUpdateRequest;
import team29.hoorry.issuetracker.core.milestone.dto.MilestonesResponse;

@Tag(name = "milestones", description = "마일스톤 API")
@RestController
@RequestMapping("/api/milestones")
@RequiredArgsConstructor
public class MilestoneController {

	private final MilestoneMockService milestoneService;

	@Operation(
		summary = "마일스톤 리스트 조회",
		description = "모든 마일스톤을 조회합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "라벨 리스트 조회 성공",
				content = {
					@Content(
						mediaType = "application/json",
						array = @ArraySchema(schema = @Schema(implementation = MilestonesResponse.class))
					)
				})
		}
	)
	@GetMapping
	public ResponseEntity<MilestonesResponse> inquire() {
		MilestonesResponse milestonesResponse = milestoneService.findAll();

		return ResponseEntity.ok(milestonesResponse);
	}

	@Operation(
		summary = "마일스톤 등록",
		description = "마일스톤을 등록합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "마일스톤 등록 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "마일스톤 등록 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PostMapping
	public ResponseEntity<Void> register(@RequestBody MilestoneAddRequest milestoneAddRequest) {
		milestoneService.save(milestoneAddRequest);

		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "마일스톤 수정",
		description = "마일스톤을 수정합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "마일스톤 수정 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "마일스톤 수정 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@PatchMapping
	public ResponseEntity<Void> update(@RequestBody MilestoneUpdateRequest milestoneUpdateRequest) {
		milestoneService.update(milestoneUpdateRequest);

		return ResponseEntity.ok().build();
	}

	@Operation(
		summary = "마일스톤 삭제",
		description = "마일스톤을 삭제합니다.",
		responses = {
			@ApiResponse(
				responseCode = "200",
				description = "마일스톤 삭제 성공"
			),
			@ApiResponse(
				responseCode = "400",
				description = "마일스톤 삭제 실패"
			)
			//todo 실패 시 content 추가할 것
		}
	)
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		milestoneService.delete(id);

		return ResponseEntity.ok().build();
	}
}
