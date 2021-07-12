from PIL import Image

def make_square(im, min_size=256, fill_color=(0, 0, 0)):
    x, y = im.size
    size = max(min_size, x, y)
    new_im = Image.new('RGB', (size, size), fill_color)
    new_im.paste(im, (int((size - x) / 2), int((size - y) / 2)))
    return new_im

if __name__ == '__main__':
    test_image = Image.open('./images/goods/YXCHYQN.jpg')
    new_image = make_square(test_image, fill_color=(255, 255, 255))
    new_image.show()
    new_image.save('YXCHYQN.jpg')
