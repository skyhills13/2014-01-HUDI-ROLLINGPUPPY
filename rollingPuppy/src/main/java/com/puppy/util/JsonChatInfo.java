package com.puppy.util;


public class JsonChatInfo {
	private String title;
	private String locationName;
	private int max;
	private long unreadMessageNum;
	
	//private Map<String, JsonParticipant> oParticipant;
	
	public JsonChatInfo(String title, String locationName, int max, long unreadMessageNum) {
		this.title = title;
		this.locationName = locationName;
		this.max = max;
		this.unreadMessageNum = unreadMessageNum;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	public int getMax() {
		return max;
	}

	public void setMax(int max) {
		this.max = max;
	}

	public long getUnreadMessageNum() {
		return unreadMessageNum;
	}

	public void setUnreadMessageNum(long unreadMessageNum) {
		this.unreadMessageNum = unreadMessageNum;
	}
}