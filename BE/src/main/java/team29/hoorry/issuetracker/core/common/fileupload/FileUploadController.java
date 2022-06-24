package team29.hoorry.issuetracker.core.common.fileupload;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class FileUploadController {

	private final FileUploadService fileUploadService;

	@PostMapping("/api/upload")
	public ResponseEntity<FileUploadResponse> uploadFile(@RequestPart MultipartFile file) {
		return ResponseEntity.ok(fileUploadService.uploadFile(file));
	}
}
