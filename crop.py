from PIL import Image

# Open the image
img = Image.open('/Users/rumeysabuyuk/Desktop/vetweb/public/duman.jpg')
width, height = img.size

# The cat is on the right side.
# Let's crop a square from the right side.
# We'll take a square whose height is the image height, positioned on the right.
# Maybe we can adjust the left edge to focus on the cat's face.
left = width - height * 0.95
top = 0
right = width - height * -0.05
bottom = height

cropped = img.crop((left, top, right, bottom))
cropped.save('/Users/rumeysabuyuk/Desktop/vetweb/public/duman-cropped.jpg')
print("Cropped successfully!")
