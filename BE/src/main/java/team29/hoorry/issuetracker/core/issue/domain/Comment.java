package team29.hoorry.issuetracker.core.issue.domain;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.Getter;
import team29.hoorry.issuetracker.core.common.BaseTimeEntity;
import team29.hoorry.issuetracker.core.member.domain.Member;

@Getter
@Entity
public class Comment extends BaseTimeEntity {

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
	private Set<CommentReaction> reactions = new HashSet<>();

}
