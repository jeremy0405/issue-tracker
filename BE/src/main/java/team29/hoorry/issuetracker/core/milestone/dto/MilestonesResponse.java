package team29.hoorry.issuetracker.core.milestone.dto;

import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class MilestonesResponse {

	private List<MilestoneDetailResponse> milestones;

	public static MilestonesResponse of(List<MilestoneDetailResponse> milestones) {
		return new MilestonesResponse(milestones);
	}
}
