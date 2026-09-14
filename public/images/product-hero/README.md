# Hero slider images

Each folder here is one slider. The folder name is the `collection` a page asks
for, so `home/` is what `<HeroSlider collection="home" />` renders.

Nothing in this system needs a code change to add, swap or remove a picture.

## Add a slide

1. Drop a wide, high-resolution photo into the collection folder and name it in
   sequence, e.g. `home-06.jpg`. Aim for 1920px wide or more; anything narrower
   gets a warning because it will be upscaled on large screens.
2. Run `npm run hero:optimize`.

That produces AVIF and WebP at 768, 1280 and 1920 wide, then deletes your
original, because the derivatives are what ships. Re-running is safe: work
already done is skipped.

3. Add an entry to `credits.json` (see below), then run `npm run hero:manifest`.

The manifest also runs automatically on `npm run dev` and on every build, so in
practice step 3 is just the `credits.json` edit.

## Remove or replace a slide

Delete the `<name>-768/1280/1920.avif|webp` files, or overwrite the source and
re-run the two commands. The slider renders whatever files are present.

## Add a whole new slider

Create a folder, e.g. `cold-storage/`, fill it as above, then use
`<HeroSlider collection="cold-storage" />`. The collection name is typechecked
against the folders that actually exist, so a typo fails the build rather than
rendering an empty hero.

## credits.json

One entry per slide, keyed by the filename without the size suffix:

```json
{
  "images": {
    "home-06": {
      "description": "What the photo shows, for whoever maintains this later.",
      "focal": "center 55%",
      "source": "Where it came from",
      "license": "The licence it is used under"
    }
  }
}
```

- `focal` is a CSS `object-position`. It decides which part of the photo
  survives cropping on a wide or narrow screen. `center 55%` biases the crop
  slightly below centre, which usually keeps a building's roofline in frame.
- `description`, `source` and `license` are the record of where each image came
  from. They are not rendered.

There is no `alt`. The slider sits behind the hero heading as decoration and is
hidden from screen readers, so alt text would only repeat the heading.

## Choosing images

The scrim over these photos is tuned so the hero text stays above the 4.5:1
contrast minimum. Very bright photos, especially white cleanroom interiors and
big areas of blank sky behind the text, push it under that line. Mid-tone and
darker photography with the subject to the right of frame works best.
