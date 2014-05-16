class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    latest_entry = feed.entries.last

    if Time.now - latest_entry.created_at > 2
      feed.reload
    end
    render :json => feed.entries
  end

  private
  def entry_params
    params.require(:entry)
      .permit(:guid, :link, :published_at, :title, :json, :feed_id)
  end
end
