package team29.hoorry.issuetracker.core.common.fileupload;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class FileUploadService {

	@Value("${cloud.aws.s3.bucket}")
	private String bucketName;

	private final AmazonS3 amazonS3;

	public FileUploadResponse uploadFile(MultipartFile file) {

		// 파일 이름 읽어와서 기존 확장자명을 유지한 채, 유니크한 파일 이름 생성
		String originalFileName = file.getOriginalFilename();
		String fileExtension;
		try {
			fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
		} catch (StringIndexOutOfBoundsException e) {
			throw new IllegalArgumentException("잘못된 형식의 파일입니다.");
		}
		String fileName = "issue-tracker/" + UUID.randomUUID().toString().concat(fileExtension);

		// 파일 업로드 요청
		ObjectMetadata objectMetadata = new ObjectMetadata();
		objectMetadata.setContentLength(file.getSize());
		objectMetadata.setContentType(file.getContentType());
		try (InputStream inputStream = file.getInputStream()) {
			PutObjectRequest request = new PutObjectRequest(bucketName, fileName, inputStream, objectMetadata)
				.withCannedAcl(CannedAccessControlList.PublicRead);
			amazonS3.putObject(request);
		} catch (IOException e) {
			throw new IllegalArgumentException("파일 변환 중 에러가 발생하였습니다.");
		}

		// 업로드된 파일 url 응답
		String fileUrl = amazonS3.getUrl(bucketName, fileName).toString();
		return new FileUploadResponse(fileUrl);
	}
}
