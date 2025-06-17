export const userRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER: "member",
    USER: "user"
}

export const AvailableUserRoles = Object.values(userRolesEnum)


export const TaskStatusEnum = {
    TODO:"todo",
    IN_PROGRESS:"in_progress",
    DONE:"done"
}

export const AvailableTaskStatuses = Object.values(TaskStatusEnum)