package team29.hoorry.issuetracker.core.issue.domain;

public enum Reaction {
	THUMBS_UP_SIGN("\uD83D\uDC4D"),
	THUMBS_DOWN_SIGN("\uD83D\uDC4E"),
	HEAVY_BLACK_HEART("❤️"),
	PARTY_POPPER("\uD83C\uDF89"),
	SMILE("\uD83D\uDE04"),
	CONFUSED_FACE("😕"),
	EYES("👀"),
	ROCKET("\uD83D\uDE80");

	private String emoji;

	Reaction(String emoji) {
		this.emoji = emoji;
	}

	public String getEmoji() {
		return emoji;
	}
}
