package team29.hoorry.issuetracker.core.common.search;

public enum SearchFilter {

	STATUS("is"),
	ASSIGNEE_NAME("assignee"),
	LABEL_NAME("label"),
	MILESTONE_NAME("milestone"),
	WRITER_NAME("author"),
	COMMENTER_NAME("commenter"),
	SEARCH_PARAM("searchParam"),
	NONE("none");

	private final String attribute;

	SearchFilter(String attribute) {
		this.attribute = attribute;
	}

	public String getAttribute() {
		return attribute;
	}

	public static SearchFilter of(String attribute) {
		SearchFilter[] values = SearchFilter.values();
		for (SearchFilter value : values) {
			if (value.getAttribute().equals(attribute))
				return value;
		}
		return NONE;
	}
}
