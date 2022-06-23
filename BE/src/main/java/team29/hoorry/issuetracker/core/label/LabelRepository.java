package team29.hoorry.issuetracker.core.label;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Repository
public interface LabelRepository extends JpaRepository<Label, Long> {

}
