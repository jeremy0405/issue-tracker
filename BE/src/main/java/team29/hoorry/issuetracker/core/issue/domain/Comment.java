package team29.hoorry.issuetracker.core.issue.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import team29.hoorry.issuetracker.core.common.embeddable.DateTimeTracker;
import team29.hoorry.issuetracker.core.member.domain.Member;

@Entity
public class Comment {

	@Id
	@Column(name = "comment_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name ="issue_id", nullable = false)
	private Issue issue;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "writer_id", nullable = false)
	private Member writer;

	@Column(nullable = false)
	private String content;

	@OneToMany(mappedBy = "comment", cascade = CascadeType.REMOVE, orphanRemoval = true)
	private List<CommentReaction> reactions = new ArrayList<>();

	@Embedded
	private DateTimeTracker dateTimeTracker;

}
