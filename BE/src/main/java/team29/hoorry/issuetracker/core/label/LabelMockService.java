package team29.hoorry.issuetracker.core.label;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import team29.hoorry.issuetracker.core.label.domain.Label;
import team29.hoorry.issuetracker.core.label.dto.LabelAddRequest;
import team29.hoorry.issuetracker.core.label.dto.LabelUpdateRequest;
import team29.hoorry.issuetracker.core.label.dto.LabelsResponse;

@Slf4j
@Service
public class LabelMockService {

	public LabelsResponse findAll() {
		List<Label> labels = List.of(
			Label.of(1L, "bug", "#0000FF", "#B9062F", "Something isn't working"),
			Label.of(2L, "documentation", "#0000FF", "#FFFFFF",
				"Improvements or additions to documentation"),
			Label.of(3L, "duplicate", "#b4b4b4", "#000000",
				"This issue or pull request already exists")
		);

		return new LabelsResponse(labels);
	}

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
