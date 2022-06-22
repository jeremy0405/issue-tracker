package team29.hoorry.issuetracker.core.milestone;

import java.time.LocalDateTime;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import team29.hoorry.issuetracker.core.milestone.domain.Milestone;
import team29.hoorry.issuetracker.core.milestone.dto.MilestoneAddRequest;
import team29.hoorry.issuetracker.core.milestone.dto.MilestoneDetailResponse;
import team29.hoorry.issuetracker.core.milestone.dto.MilestoneUpdateRequest;
import team29.hoorry.issuetracker.core.milestone.dto.MilestonesResponse;

@Slf4j
@Service
public class MilestoneMockService {

	public MilestonesResponse findAll() {

		MilestoneDetailResponse response1 = MilestoneDetailResponse.of(1L, "마일스톤1", "설명1",
			LocalDateTime.now(), 2, 5);
		MilestoneDetailResponse response2 = MilestoneDetailResponse.of(2L, "마일스톤2", "설명2",
			LocalDateTime.now(), 3, 4);
		MilestoneDetailResponse response3 = MilestoneDetailResponse.of(3L, "마일스톤3", "설명3",
			LocalDateTime.of(2022, 6, 25, 12, 0), 4, 5);

		return MilestonesResponse.of(List.of(response1, response2, response3));
	}

	public Milestone save(MilestoneAddRequest milestoneAddRequest) {
		log.debug("{}", milestoneAddRequest.getTitle());
		log.debug("{}", milestoneAddRequest.getDescription());
		log.debug("{}", milestoneAddRequest.getDueDate());

		return null;
	}

	public Milestone update(MilestoneUpdateRequest milestoneUpdateRequest) {
		log.debug("{}", milestoneUpdateRequest.getTitle());
		log.debug("{}", milestoneUpdateRequest.getDescription());
		log.debug("{}", milestoneUpdateRequest.getDueDate());

		return null;
	}

	public void delete(Long id) {
		log.debug("{}", id);
	}
}
