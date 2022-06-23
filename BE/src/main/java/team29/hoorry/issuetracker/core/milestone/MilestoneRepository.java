package team29.hoorry.issuetracker.core.milestone;

import org.springframework.data.jpa.repository.JpaRepository;
import team29.hoorry.issuetracker.core.milestone.domain.Milestone;

public interface MilestoneRepository extends JpaRepository<Milestone, Long>, MilestoneCustomRepository {

}
