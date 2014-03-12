class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Feed.all.to_json(include: :entries) }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed.to_json(include: :entries)
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    @feed = Feed.find(params[:id])
    @feed.reload if Time.now - @feed.updated_at >= 1.minutes
    render :json => @feed.to_json(include: :entries)
  end

  private
  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
