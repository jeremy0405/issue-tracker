package team29.hoorry.issuetracker.core.label.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Entity
public class Label {

	@Id
	@Column(name = "label_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;

	@Column(nullable = false)
	private String titleColor;

	@Column(nullable = false)
	private String backgroundColor;

	private String description;

	public static Label of(Long id, String title, String titleColor, String backgroundColor,
		String description) {
		return new Label(id, title, titleColor, backgroundColor, description);
	}
}
