package team29.hoorry.issuetracker.core.label;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.label.domain.Label;
import team29.hoorry.issuetracker.core.label.dto.LabelAddRequest;
import team29.hoorry.issuetracker.core.label.dto.LabelResponse;
import team29.hoorry.issuetracker.core.label.dto.LabelsResponse;

@Service
@RequiredArgsConstructor
@Transactional
public class LabelService {

	private final LabelRepository labelRepository;

	public LabelsResponse findAll() {
		List<LabelResponse> labelResponses = labelRepository.findAll().stream()
			.map(LabelResponse::from)
			.collect(Collectors.toList());

		return new LabelsResponse(labelResponses);
	}
}
