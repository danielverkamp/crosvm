initSidebarItems({"constant":[["PLANE_INFO_MAX_COUNT",""],["VIRTIO_GPU_BLOB_FLAG_CREATE_GUEST_HANDLE",""],["VIRTIO_GPU_BLOB_FLAG_USE_CROSS_DEVICE",""],["VIRTIO_GPU_BLOB_FLAG_USE_MAPPABLE",""],["VIRTIO_GPU_BLOB_FLAG_USE_SHAREABLE",""],["VIRTIO_GPU_BLOB_MEM_GUEST",""],["VIRTIO_GPU_BLOB_MEM_HOST3D",""],["VIRTIO_GPU_BLOB_MEM_HOST3D_GUEST",""],["VIRTIO_GPU_CAPSET_CROSS_DOMAIN",""],["VIRTIO_GPU_CAPSET_GFXSTREAM",""],["VIRTIO_GPU_CAPSET_VENUS",""],["VIRTIO_GPU_CAPSET_VIRGL",""],["VIRTIO_GPU_CAPSET_VIRGL2",""],["VIRTIO_GPU_CMD_CTX_ATTACH_RESOURCE",""],["VIRTIO_GPU_CMD_CTX_CREATE",""],["VIRTIO_GPU_CMD_CTX_DESTROY",""],["VIRTIO_GPU_CMD_CTX_DETACH_RESOURCE",""],["VIRTIO_GPU_CMD_GET_CAPSET",""],["VIRTIO_GPU_CMD_GET_CAPSET_INFO",""],["VIRTIO_GPU_CMD_GET_DISPLAY_INFO",""],["VIRTIO_GPU_CMD_GET_EDID",""],["VIRTIO_GPU_CMD_MOVE_CURSOR",""],["VIRTIO_GPU_CMD_RESOURCE_ASSIGN_UUID",""],["VIRTIO_GPU_CMD_RESOURCE_ATTACH_BACKING",""],["VIRTIO_GPU_CMD_RESOURCE_CREATE_2D",""],["VIRTIO_GPU_CMD_RESOURCE_CREATE_3D",""],["VIRTIO_GPU_CMD_RESOURCE_CREATE_BLOB",""],["VIRTIO_GPU_CMD_RESOURCE_DETACH_BACKING",""],["VIRTIO_GPU_CMD_RESOURCE_FLUSH",""],["VIRTIO_GPU_CMD_RESOURCE_MAP_BLOB",""],["VIRTIO_GPU_CMD_RESOURCE_UNMAP_BLOB",""],["VIRTIO_GPU_CMD_RESOURCE_UNREF",""],["VIRTIO_GPU_CMD_SET_SCANOUT",""],["VIRTIO_GPU_CMD_SET_SCANOUT_BLOB",""],["VIRTIO_GPU_CMD_SUBMIT_3D",""],["VIRTIO_GPU_CMD_TRANSFER_FROM_HOST_3D",""],["VIRTIO_GPU_CMD_TRANSFER_TO_HOST_2D",""],["VIRTIO_GPU_CMD_TRANSFER_TO_HOST_3D",""],["VIRTIO_GPU_CMD_UPDATE_CURSOR",""],["VIRTIO_GPU_CONTEXT_INIT_CAPSET_ID_MASK",""],["VIRTIO_GPU_EVENT_DISPLAY",""],["VIRTIO_GPU_FLAG_FENCE",""],["VIRTIO_GPU_FLAG_INFO_RING_IDX",""],["VIRTIO_GPU_FORMAT_A8B8G8R8_UNORM",""],["VIRTIO_GPU_FORMAT_A8R8G8B8_UNORM",""],["VIRTIO_GPU_FORMAT_B8G8R8A8_UNORM",""],["VIRTIO_GPU_FORMAT_B8G8R8X8_UNORM",""],["VIRTIO_GPU_FORMAT_R8G8B8A8_UNORM",""],["VIRTIO_GPU_FORMAT_R8G8B8X8_UNORM",""],["VIRTIO_GPU_FORMAT_X8B8G8R8_UNORM",""],["VIRTIO_GPU_FORMAT_X8R8G8B8_UNORM",""],["VIRTIO_GPU_F_CONTEXT_INIT",""],["VIRTIO_GPU_F_CREATE_GUEST_HANDLE",""],["VIRTIO_GPU_F_EDID",""],["VIRTIO_GPU_F_RESOURCE_BLOB",""],["VIRTIO_GPU_F_RESOURCE_SYNC",""],["VIRTIO_GPU_F_RESOURCE_UUID",""],["VIRTIO_GPU_F_VIRGL",""],["VIRTIO_GPU_MAX_SCANOUTS",""],["VIRTIO_GPU_RESOURCE_FLAG_Y_0_TOP",""],["VIRTIO_GPU_RESP_ERR_INVALID_CONTEXT_ID",""],["VIRTIO_GPU_RESP_ERR_INVALID_PARAMETER",""],["VIRTIO_GPU_RESP_ERR_INVALID_RESOURCE_ID",""],["VIRTIO_GPU_RESP_ERR_INVALID_SCANOUT_ID",""],["VIRTIO_GPU_RESP_ERR_OUT_OF_MEMORY",""],["VIRTIO_GPU_RESP_ERR_UNSPEC",""],["VIRTIO_GPU_RESP_OK_CAPSET",""],["VIRTIO_GPU_RESP_OK_CAPSET_INFO",""],["VIRTIO_GPU_RESP_OK_DISPLAY_INFO",""],["VIRTIO_GPU_RESP_OK_EDID",""],["VIRTIO_GPU_RESP_OK_MAP_INFO",""],["VIRTIO_GPU_RESP_OK_NODATA",""],["VIRTIO_GPU_RESP_OK_RESOURCE_PLANE_INFO",""],["VIRTIO_GPU_RESP_OK_RESOURCE_UUID",""],["VIRTIO_GPU_SHM_ID_HOST_VISIBLE",""],["VIRTIO_GPU_SHM_ID_NONE",""],["VIRTIO_GPU_UNDEFINED",""]],"enum":[["GpuCommand","A virtio gpu command and associated metadata specific to each command."],["GpuCommandDecodeError","An error indicating something went wrong decoding a `GpuCommand`. These correspond to `VIRTIO_GPU_CMD_*`."],["GpuResponse","A response to a `GpuCommand`. These correspond to `VIRTIO_GPU_RESP_*`."],["GpuResponseEncodeError","An error indicating something went wrong decoding a `GpuCommand`."]],"fn":[["virtio_gpu_cmd_str",""]],"struct":[["GpuResponsePlaneInfo",""],["virtio_gpu_box",""],["virtio_gpu_cmd_submit",""],["virtio_gpu_config",""],["virtio_gpu_ctrl_hdr",""],["virtio_gpu_ctx_create",""],["virtio_gpu_ctx_destroy",""],["virtio_gpu_ctx_resource",""],["virtio_gpu_cursor_pos",""],["virtio_gpu_display_one",""],["virtio_gpu_get_capset",""],["virtio_gpu_get_capset_info",""],["virtio_gpu_mem_entry",""],["virtio_gpu_rect",""],["virtio_gpu_resource_assign_uuid",""],["virtio_gpu_resource_attach_backing",""],["virtio_gpu_resource_create_2d",""],["virtio_gpu_resource_create_3d",""],["virtio_gpu_resource_create_blob",""],["virtio_gpu_resource_detach_backing",""],["virtio_gpu_resource_flush",""],["virtio_gpu_resource_map_blob",""],["virtio_gpu_resource_unmap_blob",""],["virtio_gpu_resource_unref",""],["virtio_gpu_resp_capset",""],["virtio_gpu_resp_capset_info",""],["virtio_gpu_resp_display_info",""],["virtio_gpu_resp_map_info",""],["virtio_gpu_resp_resource_plane_info",""],["virtio_gpu_resp_resource_uuid",""],["virtio_gpu_set_scanout",""],["virtio_gpu_set_scanout_blob",""],["virtio_gpu_transfer_host_3d",""],["virtio_gpu_transfer_to_host_2d",""],["virtio_gpu_update_cursor",""]],"type":[["VirtioGpuResult",""]]});