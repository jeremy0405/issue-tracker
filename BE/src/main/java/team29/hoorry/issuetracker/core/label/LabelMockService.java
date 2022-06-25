package team29.hoorry.issuetracker.core.label;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import team29.hoorry.issuetracker.core.label.domain.Label;
import team29.hoorry.issuetracker.core.label.dto.LabelAddRequest;
import team29.hoorry.issuetracker.core.label.dto.LabelUpdateRequest;

@Slf4j
@Service
public class LabelMockService {

	public Label save(LabelAddRequest labelAddRequest) {
		log.debug("title = {}", labelAddRequest.getTitle());
		log.debug("title color = {}", labelAddRequest.getTitleColor());
		log.debug("background color = {}", labelAddRequest.getBackgroundColor());
		log.debug("description = {}", labelAddRequest.getDescription());

		return null;
	}

	public Label update(LabelUpdateRequest labelUpdateRequest) {
		log.debug("title = {}", labelUpdateRequest.getTitle());
		log.debug("title color = {}", labelUpdateRequest.getTitleColor());
		log.debug("background color = {}", labelUpdateRequest.getBackgroundColor());
		log.debug("description = {}", labelUpdateRequest.getDescription());

		return null;
	}

	public void delete(Long id) {
		log.debug("id = {}", id);
	}
}
