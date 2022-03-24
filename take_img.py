import cv2
import os

cam = cv2.VideoCapture(0)

cv2.namedWindow("Attendance Cam")

img_counter = 0

while True:
    ret, frame = cam.read()
    if not ret:
        print("Failed to grab any frame")
        break
    cv2.imshow("Attendance Cam", frame)

    k = cv2.waitKey(1)
    if k%256 == 27:
        # ESC pressed
        print("Escape hit, closing...")
        break
    elif k%256 == 32:
        # SPACE pressed
        
        img_name = "opencv{}.png".format(img_counter)
        img_ = cv2.imread(img_name, 1)
        path = './Training_images'
        cv2.imwrite(os.path.join(path, img_name), frame)
        print("{} written!".format(img_name))
        img_counter += 1


cam.release()

cv2.destroyAllWindows()
