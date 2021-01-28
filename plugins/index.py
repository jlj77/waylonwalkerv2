from markata.hookspec import hook_impl
from string import Template


@hook_impl
def save(markata):

    tags = None
    posts = reversed(sorted(markata.articles, key=lambda x: x["date"]))
    # posts = reversed(get_posts())

    if type(tags) == str:
        tags = [tags]
    posts = [post for post in posts if post["status"] == "published"]
    if tags is not None:
        posts = [post for post in posts if set(post["tags"]) & set(tags)]
    cards = [create_card(markata, post) for post in posts]
    with open(markata.config["archive_template"]) as f:
        template = Template(f.read())
    with open(markata.config["output_dir"] + "/" + "index.html", "w+") as f:
        print("writing index")
        f.write(
            template.safe_substitute(
                body="".join(cards),
                url=markata.config["url"],
                descriiption=markata.config["description"],
                title=markata.config["title"],
            )
        )


def create_card(markata, post):
    return f"""
<li class='post'>
  <a href="{markata.config['url'] +  "/" + post['slug']}">
    <h2 class='title'>{post['title']}</h2>
    <p class='description'>{post['long_description']}</p>
    <p class='date'>{post['date'].year}-{post['date'].month}-{post['date'].day}</p>
  </a>
</li>
"""
