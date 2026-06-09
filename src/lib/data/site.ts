/** A single link rendered as a button on the page. */
export interface SiteLink {
	title: string;
	url: string;
	/** When true, the button gets the overlaid "special" style rules. */
	highlight?: boolean;
}

/** Shape of the site's content/configuration. */
export interface SiteData {
	logo: string;
	links: SiteLink[];
}
