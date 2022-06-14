package team29.hoorry.issuetracker.core.label.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LabelsResponse {

	private List<Label> labels;
}
