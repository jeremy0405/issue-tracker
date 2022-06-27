package team29.hoorry.issuetracker.core.issue;

import org.springframework.data.jpa.repository.JpaRepository;
import team29.hoorry.issuetracker.core.issue.domain.CommentReaction;

public interface CommentReactionRepository extends JpaRepository<CommentReaction, Long> {

}
