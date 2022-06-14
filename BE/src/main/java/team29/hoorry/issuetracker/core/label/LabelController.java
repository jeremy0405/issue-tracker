package team29.hoorry.issuetracker.core.label;

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
import team29.hoorry.issuetracker.core.label.dto.LabelAddRequest;
import team29.hoorry.issuetracker.core.label.dto.LabelUpdateRequest;
import team29.hoorry.issuetracker.core.label.dto.LabelsResponse;

@Tag(name = "labels", description = "라벨 API")
@RestController
@RequestMapping("/api/labels")
@RequiredArgsConstructor
public class LabelController {

	private final LabelMockService labelMockService;

	@Operation(summary = "라벨 리스트 조회",
		description = "모든 라벨을 조회합니다.",
		responses = {
			@ApiResponse(responseCode = "200",
				description = "라벨 리스트 조회 성공",
				content = {
					@Content(
						mediaType = "application/json",
						array = @ArraySchema(schema = @Schema(implementation = LabelsResponse.class))
					)
				})
		}
	)
	@GetMapping
	public ResponseEntity<LabelsResponse> labels() {
		LabelsResponse labelsResponse = labelMockService.findAll();
		return ResponseEntity.ok(labelsResponse);
	}

	@Operation(summary = "라벨 등록",
		description = "라벨을 등록합니다.",
		responses = {
			@ApiResponse(responseCode = "200",
				description = "라벨 등록 성공"),
			@ApiResponse(responseCode = "400",
				description = "라벨 등록 실패 ")
			// TODO: 실패시 예외 응답 content 추가
		}
	)
	@PostMapping
	public ResponseEntity<Void> add(@RequestBody LabelAddRequest labelAddRequest) {
		labelMockService.save(labelAddRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(summary = "라벨 수정",
		description = "라벨을 수정합니다.",
		responses = {
			@ApiResponse(responseCode = "200",
				description = "라벨 수정 성공"),
			@ApiResponse(responseCode = "400",
				description = "라벨 수정 실패 ")
			// TODO: 실패시 예외 응답 content 추가
		}
	)
	@PatchMapping
	public ResponseEntity<Void> update(@RequestBody LabelUpdateRequest labelUpdateRequest) {
		labelMockService.update(labelUpdateRequest);
		return ResponseEntity.ok().build();
	}

	@Operation(summary = "라벨 삭제",
		description = "라벨을 삭제합니다.",
		responses = {
			@ApiResponse(responseCode = "200",
				description = "라벨 삭제 성공"),
			@ApiResponse(responseCode = "400",
				description = "라벨 삭제 실패 ")
			// TODO: 실패시 예외 응답 content 추가
		}
	)
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		labelMockService.delete(id);
		return ResponseEntity.ok().build();
	}
}
