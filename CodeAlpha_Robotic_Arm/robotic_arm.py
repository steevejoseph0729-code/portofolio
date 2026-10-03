import tkinter as tk
import math

# Main window
window = tk.Tk()
window.title("Robotic Arm Simulator")
window.geometry("800x700")

# Canvas
canvas = tk.Canvas(window, width=800, height=450, bg="white")
canvas.pack()

# Arm settings
base_x = 400
base_y = 350
length1 = 130
length2 = 100

# Gripper state
gripper_open = True


def draw_arm():
    canvas.delete("all")

    # Get angles
    angle1 = math.radians(slider1.get())
    angle2 = math.radians(slider2.get())

    # First joint position
    x1 = base_x + length1 * math.cos(angle1)
    y1 = base_y - length1 * math.sin(angle1)

    # Second joint position
    x2 = x1 + length2 * math.cos(angle1 + angle2)
    y2 = y1 - length2 * math.sin(angle1 + angle2)

    # Base
    canvas.create_oval(
        base_x - 25, base_y - 25,
        base_x + 25, base_y + 25,
        fill="gray"
    )

    # First arm
    canvas.create_line(
        base_x, base_y,
        x1, y1,
        width=25
    )

    # Second arm
    canvas.create_line(
        x1, y1,
        x2, y2,
        width=20
    )

    # Shoulder joint
    canvas.create_oval(
        x1 - 12, y1 - 12,
        x1 + 12, y1 + 12,
        fill="red"
    )

    # Elbow joint
    canvas.create_oval(
        x2 - 12, y2 - 12,
        x2 + 12, y2 + 12,
        fill="red"
    )

    # Gripper
    if gripper_open:
        canvas.create_line(
            x2, y2,
            x2 - 25, y2 - 25,
            width=8
        )

        canvas.create_line(
            x2, y2,
            x2 + 25, y2 - 25,
            width=8
        )
    else:
        canvas.create_line(
            x2, y2,
            x2 - 10, y2 - 25,
            width=8
        )

        canvas.create_line(
            x2, y2,
            x2 + 10, y2 - 25,
            width=8
        )


def reset_arm():
    slider1.set(90)
    slider2.set(0)

    global gripper_open
    gripper_open = True

    gripper_button.config(text="CLOSE GRIPPER")

    draw_arm()


def toggle_gripper():
    global gripper_open

    gripper_open = not gripper_open

    if gripper_open:
        gripper_button.config(text="CLOSE GRIPPER")
    else:
        gripper_button.config(text="OPEN GRIPPER")

    draw_arm()


# Shoulder slider
tk.Label(
    window,
    text="Shoulder Angle"
).pack()

slider1 = tk.Scale(
    window,
    from_=0,
    to=180,
    orient=tk.HORIZONTAL,
    length=500,
    command=lambda value: draw_arm()
)

slider1.set(90)
slider1.pack()


# Elbow slider
tk.Label(
    window,
    text="Elbow Angle"
).pack()

slider2 = tk.Scale(
    window,
    from_=-180,
    to=180,
    orient=tk.HORIZONTAL,
    length=500,
    command=lambda value: draw_arm()
)

slider2.set(0)
slider2.pack()


# Gripper button
gripper_button = tk.Button(
    window,
    text="CLOSE GRIPPER",
    command=toggle_gripper
)

gripper_button.pack(pady=5)


# Reset button
reset_button = tk.Button(
    window,
    text="RESET ARM",
    command=reset_arm
)

reset_button.pack(pady=5)


# Initial drawing
draw_arm()

# Start program
window.mainloop()